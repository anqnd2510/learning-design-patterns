export class Amplifier {
  on() {
    console.log("🔊 Amplifier ON");
  }
  off() {
    console.log("🔇 Amplifier OFF");
  }
  setVolume(level: number) {
    console.log(`🔊 Amplifier volume set to ${level}`);
  }
}
