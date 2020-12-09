import { VerifyUsernameValidator } from './verify-username.service';

describe('VerifyUsernameValidator', () => {
  it('should create an instance', () => {
    const directive = new VerifyUsernameValidator();
    expect(directive).toBeTruthy();
  });
});
