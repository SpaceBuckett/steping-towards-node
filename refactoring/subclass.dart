///
/// REPLACE TYPE CODE WITH SUB CLASS
///
class Animal {
  int typeCode;

  Animal(this.typeCode);

  String makeSound() {
    if (typeCode == 1) {
      return "Bark";
    } else if (typeCode == 2) {
      return "Moo";
    } else if (typeCode == 3) {
      return "Meow";
    } else {
      return "Unknown sound";
    }
  }
}

// abstract class Animal {
//   String makeSound();
// }

// class Dog extends Animal {
//   @override
//   String makeSound() => "Bark";
// }

// class Cow extends Animal {
//   @override
//   String makeSound() => "Moo";
// }

// class Cat extends Animal {
//   @override
//   String makeSound() => "Meow";
// }

void main() {
  Animal cat = Animal(2);
  print('Make a sound: ${cat.makeSound()}');
  // Cat cat = Cat();
  // print("sound is ${cat.makeSound()}");

  //  Dog dog = Dog();
  // print("sound is ${dog.makeSound()}");
}
