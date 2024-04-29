// Archivo: spaceship.ts
export interface Spaceship {
    health: number;
    cargoCapacity: number;
    speed: number;
}

// Archivo: planet.ts
export enum ResourceType {
    Water,
    Minerals,
    Oxygen,
}

export class Planet {
    constructor(
        public name: string,
        public resourceType: ResourceType,
        public dangerLevel: number
    ) {}
}

// Archivo: event.ts
export interface Event {
    affectHealth: (health: number) => number;
    affectCargoCapacity: (capacity: number) => number;
    affectSpeed: (speed: number) => number;
}

// Archivo: navigation.ts
import { Spaceship } from "./spaceship";

export type Direction = "north" | "south" | "east" | "west";

export function navigate(ship: Spaceship, direction: Direction): void {
    // Implementación de la función de navegación
}

// Archivo: resourceManagement.ts
import { Planet, ResourceType } from "./planet";
import { Spaceship } from "./spaceship";

export function collectResources<T extends ResourceType>(
    planet: Planet,
    ship: Spaceship
): void {
    // Implementación de la función de recolección de recursos
}

// Archivo: eventHandler.ts
import { Event } from "./event";

export function handleEvent(event: Event): void {
    // Implementación del manejador de eventos
}

// Archivo: userInteraction.ts
import { Spaceship } from "./spaceship";
import { Direction, navigate } from "./navigation";
import { Planet } from "./planet";
import { collectResources } from "./resourceManagement";
import { handleEvent } from "./eventHandler";

export function getUserInput(prompt: string): string {
    // Implementación de la captura de entrada del usuario
    return "";
}

export function simulateTravel(ship: Spaceship, planet: Planet): void {
    // Implementación de la simulación de viaje
}

// Archivo: main.ts
import { Spaceship } from "./spaceship";
import { Planet, ResourceType } from "./planet";
import { getUserInput, simulateTravel } from "./userInteraction";

// Ejemplo de uso
const ship: Spaceship = {
    health: 100,
    cargoCapacity: 200,
    speed: 50,
};

const destination: Planet = new Planet("Earth", ResourceType.Water, 3);

const userInput: string = getUserInput("Choose a direction (north/south/east/west): ");

simulateTravel(ship, destination);
