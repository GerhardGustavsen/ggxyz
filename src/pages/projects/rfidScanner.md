---
layout: /src/layouts/article.astro
title: RFID scanner
date: 2023-08-31
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" crossorigin="anonymous">

![omega verksted](/src/images/projects/rfid/omega.jpg)

## Project
There is a door. I will not tell where this door is for security concern, but whats importent to know is that the door is somtimes locked. This is an anoiance as not manny people has keys to this door and is relient on getting a person on the inside to open. This is cumbersome.

The project was to create an rfid door opener. The scanner must have the ability to register new rfid's as well as string them on non-volitile memory. 

## Board
I was originally going to use an arduino UNO as I had one lying around. Arduinoes are perhaps the most standarized well ducumented microcontollers. The ardiono-UNO uses the ATmega328P chip. This chip has 32KiB of non-volitile flash memory, where 2KiB are used for the boot loader. I calculated that this would be enough for my memory needs. I would store eatch rfid with strings consisting of hexadecimal numbers. This means every hexadecimal needs 3 bytes, as 2 byets goes to the 2 chars of the hexadecimal while the last goes for a comma or a space separeting the hexadecimals. Some quick maths therefore gave me this:

1(byte for a char) * 3(chars for one hexadecimal) * 8(max rfid hex length) * 200(max number of cars) = 4800Bytes

This ment that I would use under 20% of the avalible storage space. I started connecting the Arduino UNO, but quicly found it was broken as it did not take anny input. Therefore I went on my way to buy a new onw. Hoverver on talking at some of the knolageable people from [omegav](omegav.no) I was told about the esp32 bord. This is a smaller bord than arduno, but it had atleest 2MiB of non-volitile flash memory [(maby 16MiB)](https://www.esp32.com/viewtopic.php?t=4086) whitch is mucth more than the arduino-UNO. It aso had suport for blutooth and wifi, somthing i found quite neat. But the reson i ended upp going with this board instead was simply prize. Its cheap.  

![eps32](/src/images/projects/rfid/esp.jpg)

Configuring this bord to work with my laptop was a bit of a job. I needed to give read wright acess to the USB device, but not mount it. Sothing I found odd. I also needed the [arduino](https://wiki.archlinux.org/title/Arduino) package and ch341 [module](https://wiki.archlinux.org/title/Kernel_module). I want to configure [VS code](https://code.visualstudio.com/) to debugg my arduino code so I can use a familliar IDE, but as I constantly beleve Il move to [neovim](https://neovim.io/) every weekend, I found it not worth it to set upp. Conclution: coding in Arduino IDE is a nightmare. / I love [prettier](https://prettier.io/).  

![wires](/src/images/projects/rfid/wire.jpg)

## Wiering
The wiereing for the project was a bit greak to me. I had gotten all the components I thought I needed. One rfid scanner, a relay, a breadboard and some wires and buttons. I ended upp following this [guide](https://esp32io.com/tutorials/esp32-rfid-nfc) for connecting the rfid scanner. It uses another versjon of the esp32 than me, with other locations of the prots, but the ports are mostly the same and it was quie ok to adapt the guide to my needs. After I got the rfid scanner to work I connected up the relay and a button to hold for regestring new cards.  

After Conecting the scanner itself, I still neded to connect the button for regestring and LEDs for indicating diffrent states. I began with connecting the LEDs and button directly to the microcontoller. After reading a bit upp on [LEDs](https://www.electronics-tutorials.ws/diode/diode_8.html). I relized that diffrent colored LEDs have diffrent voltage drops. All LEDs used in this project prefer 20milliAmps and I shuld therefore connect resistors to deliver this current. To low of a current is not a huge problem as it will only make the LED dimmer, but to high and i could potensially blow the LED or shorten its lifespann. 

I wanted to figure out the current over the LED without the resistor. I know the powersuply is 3.3Volts. Since $I = \frac{U}{R}$, We shuld only need the resistance to fint the current. Hoverver this turned out to not be so easy. LED apprantly does not have a typical resistance as its dependent on the voltage. This [article](https://lednique.com/current-voltage-relationships/resistance-of-an-led/) explaned this quite well, but Im still not shure if I understand it completly. However to fint the needed resistor ohm to make the LED only use 20mA we can use this formula:

$$
R = \frac{V_s -V_f}{I_f}
$$

For a Red LED I know that the forward voltage drop is 1.8V and the prefered amprage is 20mA. I also know that the esp32 suplies 3.3Volts. This gives me:

$$
R = \frac{3.3V -1.8V}{20mA} = 75Ω
$$

Yelow and Green gives 55Ω and -10Ω respectily. This means that i actually have a bit to low voltage for the green diode. As of wrighting this artilce I have still not invested in anny resistors and the RED led is propably not very happy, but still works. 

After my long rant on resistors and ohm you may think im a compleate maiach for the way i configured the button. And yes I am.

## Code
Coding the project was a bit of a pain. I qucly relied I have forgotten all about C++ and I could not for thje life of me figure out how to loop thugh an array. I got a lot of index out of bounds errors and the device crashed quite regulary. Its ok now, but the code is rather ugly. The main reson Ive included itis so that it may be improved by somone else in the future. 


```cpp
#include <SPI.h>
#include <MFRC522.h>
#include <Preferences.h>

#define SS_PIN 5   // ESP32 pin GPIO5
#define RST_PIN 27 // ESP32 pin GPIO27

#define NUM 100 // Max number of cards

MFRC522 rfid(SS_PIN, RST_PIN);
Preferences preferences;
// Settings
int holdD = 30;

String beboere[NUM];
int hold = 0;

// Push function to push id to beboere array
void push(String old[], String newId)
{
  for (int i = NUM - 1; i > 0; i--)
  {
    old[i] = old[i - 1];
  }
  old[0] = newId;
}

void setup()
{
  Serial.begin(9600);
  SPI.begin();     // init SPI bus
  rfid.PCD_Init(); // init MFRC522

  preferences.begin("bank", false); // initiate flash memory store
  String beboereString = preferences.getString("beboere", "");

  delay(5000);
  Serial.println();
  Serial.println();
  Serial.println();
  Serial.println();
  Serial.println("START");
  Serial.println("flash memory: " + beboereString);
  Serial.println();

  String memoId = "";
  for (int i = 0; i < beboereString.length(); i++)
  {
    if (beboereString[i] == '|')
    {
      if (memoId != "")
      {
        push(beboere, memoId);
        memoId = "";
      }
    }
    else
    {
      memoId = memoId + beboereString[i];
    }
  }
  push(beboere, memoId);

  pinMode(33, OUTPUT); // MAIN open outputt
  pinMode(32, INPUT);  // REGISTER btn

  pinMode(25, OUTPUT); // GREEN
  pinMode(22, OUTPUT); // YELLOW
  pinMode(21, OUTPUT); // RED
}

void loop()
{
  if (digitalRead(32) == HIGH)
  {
    hold++;
  }
  else
  {
    hold = 0;
  }
  if (hold > holdD)
  {
    digitalWrite(22, HIGH); // YELLOW ON
  }
  else
  {
    digitalWrite(22, LOW); // YELLOW OFF
  }

  if (rfid.PICC_IsNewCardPresent())
  { // new tag is available
    if (rfid.PICC_ReadCardSerial())
    { // NUID has been readed
      MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
      Serial.println();

      Serial.print("RFID/NFC Tag Type: ");
      Serial.println(rfid.PICC_GetTypeName(piccType));

      // print UID in Serial Monitor in the hex format
      String id = "";
      for (int i = 0; i < rfid.uid.size; i++)
      {
        String hex = rfid.uid.uidByte[i] < 0x10 ? " 0" : " ";
        hex = hex + String(rfid.uid.uidByte[i], HEX);
        id = id + hex;
      }
      id = id.substring(1, id.length());
      Serial.println("UID: " + id);

      // Figure ut if door shuld open:
      boolean open = false;
      for (int i = 0; i < NUM; i++)
      {
        if (id == beboere[i])
        {
          open = true;
        }
      }

      // Handle access:
      if (open)
      {
        digitalWrite(33, HIGH); // Set GPIO33 active high
        digitalWrite(25, HIGH); // GREEN ON
        delay(3000);
        digitalWrite(33, LOW); // Set GPIO33 active low
        digitalWrite(25, LOW); // GREEN OFF

        // Sort ids:
        int memo = 0;
        for (int i = NUM - 1; i > 0; i--)
        {
          if (beboere[i] == id)
          {
            memo = 1;
          }
          beboere[i] = beboere[i - memo];
        }
        beboere[0] = id;

        Serial.println("Access granted!");
      }
      else if (hold > holdD)
      {

        digitalWrite(25, HIGH); // GREEN ON
        digitalWrite(21, HIGH); // RED ON
        // push new id:
        push(beboere, id);

        hold = 0;

        // convert array into long string:
        String beboereString = "";
        for (int i = 0; i < NUM; i++)
        {
          if (beboere[i] != "")
          {
            beboereString = beboereString + "|" + beboere[i];
          }
        }
        // save:
        preferences.putString("beboere", beboereString);

        Serial.println("Registered new card!");
        delay(1000);
        digitalWrite(25, LOW); // GREEN OFF
        digitalWrite(21, LOW); // RED OFF
      }
      else
      {
        digitalWrite(21, HIGH); // RED ON
        delay(1000);
        digitalWrite(21, LOW); // RED OFF
      }

      // print beboere:
      Serial.println("beboere:");
      for (int i = 0; i < NUM; i++)
      {
        if (beboere[i] != "")
        {
          Serial.println(String(i) + ": " + beboere[i]);
        }
      }

      rfid.PICC_HaltA();      // halt PICC
      rfid.PCD_StopCrypto1(); // stop encryption on PCD
    }
  }
}

```

Compleated device:
![lock](/images/projects/rfid/lock.jpg)
