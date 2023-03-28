///
/// Type code with state or strategy
///

abstract class AnimalSound {
  String makeSound();
}

class BarkSound implements AnimalSound {
  @override
  String makeSound() => "Bark";
}

class MooSound implements AnimalSound {
  @override
  String makeSound() => "Moo";
}

class MeowSound implements AnimalSound {
  @override
  String makeSound() => "Meow";
}

class Animal {
  AnimalSound sound;

  Animal(this.sound);

  String makeSound() => sound.makeSound();
}

void main() {
  Animal dog = Animal(BarkSound());
  Animal cow = Animal(MooSound());
  Animal cat = Animal(MeowSound());

  print(dog.makeSound());
  print(cow.makeSound());
  print(cat.makeSound());
}
