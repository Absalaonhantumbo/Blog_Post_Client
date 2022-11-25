import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_URL} from "../../environments/environment";
import {ILoginResponse} from "../models/login-response";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string) {
    return this.http.post<ILoginResponse>(`${API_URL}/users/signin`, {email, password});
  }

  singUp(name: string,email: string, password: string) {
    return this.http.post(`${API_URL}/users/signup`, {name, email, password});
  }

  getAllUsers(){
      const token = localStorage.getItem('token');
       const options = {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
       };
       return this.http.get<ILoginResponse[]>(`${API_URL}/users`, options);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token){
      return true;
    }
    return false;
  }

  isAuthorize(id: number| undefined): boolean{
    const author = parseInt(localStorage.getItem('userId')+'');
    if(author == id){
      return true;
    }
    return false;
  }
}
