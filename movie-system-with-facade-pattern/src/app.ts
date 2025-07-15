import { Amplifier } from "./subsystems/Amplifier";
import { Projector } from "./subsystems/projector";
import { Screen } from "./subsystems/screen";
import { StreamingPlayer } from "./subsystems/streamingPlayer";
import { ThreaterLights } from "./subsystems/theaterLights";
import { HomeTheaterFacade } from "./facade/homeTheaterFacade";

const amp = new Amplifier();
const projector = new Projector();
const screen = new Screen();
const lights = new ThreaterLights();
const player = new StreamingPlayer();

const homeTheater = new HomeTheaterFacade(
  amp,
  projector,
  screen,
  lights,
  player
);
homeTheater.watchMovie("No Star Where!!!!!!!!!!");

setTimeout(() => {
  homeTheater.endMovie();
}, 10000);
