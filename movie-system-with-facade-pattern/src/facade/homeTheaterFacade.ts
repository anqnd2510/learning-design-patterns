import { Amplifier } from "../subsystems/Amplifier";
import { Projector } from "../subsystems/projector";
import { Screen } from "../subsystems/screen";
import { ThreaterLights } from "../subsystems/theaterLights";
import { StreamingPlayer } from "../subsystems/streamingPlayer";

export class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private projector: Projector,
    private screen: Screen,
    private lights: ThreaterLights,
    private player: StreamingPlayer
  ) {}

  watchMovie(movie: string) {
    console.log("\n🎉 Get ready to watch a movie...");
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }
  endMovie() {
    console.log("\n🛑 Shutting down movie theater...");
    this.player.stop();
    this.player.off();
    this.amp.off();
    this.projector.off();
    this.screen.up();
    this.lights.on();
  }
}
