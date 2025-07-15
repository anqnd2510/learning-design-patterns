export class StreamingPlayer {
  on() {
    console.log("🎬 Streaming Player ON");
  }
  off() {
    console.log("🎬 Streaming Player OFF");
  }
  play(movie: string) {
    console.log(`🎥 Now playing: "${movie}"`);
  }
  stop() {
    console.log("⏹️ Stopping the movie");
  }
}
