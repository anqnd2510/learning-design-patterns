import { GameCharacter } from "./prototype/gameCharacter";

// Tạo prototype gốc
const baseWarrior = new GameCharacter("Warrior", 100, 20, ["Slash", "Block"]);
baseWarrior.display();

// Clone và tùy chỉnh
const fireWarrior = baseWarrior.clone();
fireWarrior.name = "Warrior (Fire Skin)";
fireWarrior.skills.push("Fire Blade");

const iceWarrior = baseWarrior.clone();
iceWarrior.name = "Warrior (Ice Skin)";
iceWarrior.skills.push("Ice Shield");

fireWarrior.display();
iceWarrior.display();
baseWarrior.display();
