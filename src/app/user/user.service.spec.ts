import { TestBed } from '@angular/core/testing';

import { User, UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  it('currentUser should be empty when no data is fetched', () => {
    const user = userService.currentUser;

    expect(user).toBeNull();
  });

  it('currentUser should return data that is fetched from http', () => {
    const testData: User = {id: 12, name: 'John'};

    userService.retrieveUser();
    let request = httpTestingController.expectOne('/user');
    request.flush(testData);

    expect(userService.currentUser.id).toEqual(12);
    expect(userService.currentUser.name).toEqual('John');
  });


});
