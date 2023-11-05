#define TRIG 9
#define ECHO 8
int buttonPin = 12;
int soundPin = 3;
int vibPin = 6;
int size;
int frequency;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(vibPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    long duration, distance;
    digitalWrite(TRIG, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG, LOW);

    duration = pulseIn(ECHO, HIGH);

    distance = duration * 0.034 / 2;

    size = map(distance, 0, 200, 255, 0);
    frequency = map(distance, 0, 200, 100, 1000);

    Serial.print(distance);
    Serial.println(" Cm");

    if (distance < 25) {
      tone(soundPin, 392);
      analogWrite(vibPin, size);
      
    } else if (distance < 200) {
      Serial.print("size :");
      Serial.println(size);
      Serial.print("frequency :");
      Serial.println(frequency);

      tone(soundPin, 392, 100);
      analogWrite(vibPin, size);
      delay(frequency);
    }

    else {
      size = 0;
      Serial.print("2미터 이상입니다.");
      noTone(soundPin);
      analogWrite(vibPin, size);
    }

  } else {
    noTone(soundPin);
    analogWrite(vibPin, 0);
  }

  delay(100);
}
