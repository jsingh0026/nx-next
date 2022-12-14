export default abstract class Base {
  abstract init(): Promise<void>;
  abstract refresh(): Promise<void>;
  abstract reset(): Promise<void>;
  abstract setupReactions(): void;
}
