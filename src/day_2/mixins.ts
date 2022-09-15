class Youtube {
  begin() {
    console.log('Hi, Welcome to my channel!');
  }
  ending() {
    console.log('Thank you for watching my video!');
  }
}

class Subscribe {
  remind() {
    console.log('Remember to subscribe to my channel');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      const baseCtorName = Object.getOwnPropertyDescriptor(
        baseCtor.prototype,
        name
      );
      if (!baseCtorName) {
        return;
      }
      Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
    });
  });
}

export class Recording {}
export interface Recording extends Youtube, Subscribe {}
applyMixins(Recording, [Youtube, Subscribe]);

const recording = new Recording();
recording.remind();
recording.ending();
