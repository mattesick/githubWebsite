import { Project } from './projects.model';

describe('Projects', () => {
  it('should create an instance', () => {
    expect(new Project({})).toBeTruthy();
  });
});
