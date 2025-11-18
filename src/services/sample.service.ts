export class SampleService {
  async findSample({ name, code }: { name?: string; code?: string }) {
    if (name && code) return true;
    return false;
  }
}
