import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../environments/environment";
import {IPost} from "../models/post";
import {  MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { Form } from '@angular/forms';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  counter = 0;
  getCount(count: number){
    this.counter=count

  }
  getAllPosts() {
   /* const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    };*/
    return this.http.get<IPost[]>(`${API_URL}/posts`);
  }

  addPost(formData: FormData) {
    console.log(formData.get('title'))
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' +token )
    };
    console.log(formData.get('postImage'))
    return this.http.post<IPost>(`${API_URL}/posts`, formData, options);
  }

  readById(id: number){
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' +token )
    };
    console.log(id);

    const response =  this.http.get<IPost>(`${API_URL}/posts/${id}`,options);
    console.log(response);
    return response;

  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration:500,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  update(postt: IPost){
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' +token )
    };
    return this.http.put<IPost>(`${API_URL}/posts/${postt.id}`,postt, options)
  }

  delete(id: number){
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    };
    return this.http.delete<IPost>(`${API_URL}/posts/${id}`, options);
  }

}

Payment Schedule
melhorar alertas;
Quality deve ser transformado em textAerea
Delivers deve ser transformado em uma lista;
Quando edito uma trancha nao deve esceder acima do valor de contracto. Back;
Remover o CreatedBy; front
DueDAte nao deve permitir ultrapassar deposi
No nome deve mandar o nome do contracto e a descricao do paymentScedule;
Introduzir o tosta da Syfusion
LEr do ficheiro de traducao em todos comentarios;
Remover do formulario  o done; limpar tela;
Definir permissoes e definir quem tem acesso 


