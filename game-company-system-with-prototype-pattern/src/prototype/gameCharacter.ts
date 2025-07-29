import { Prototype } from "./prototype";

export class GameCharacter implements Prototype {
  name: string;
  health: number;
  attack: number;
  skills: string[];

  constructor(name: string, health: number, attack: number, skills: string[]) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.skills = skills;
  }
  clone(): GameCharacter {
    return new GameCharacter(this.name, this.health, this.attack, [
      ...this.skills,
    ]);
  }
  display(): void {
    console.log(
      `${this.name} - HP: ${this.health}, ATK: ${
        this.attack
      }, Skills: ${this.skills.join(", ")}`
    );
  }
}
