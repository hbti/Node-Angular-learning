import {Component, OnInit} from '@angular/core'; // Importing OnInit hook
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	posts:any;
	// Implementing OnInit
	constructor(private http: HttpClient) {}
	title = 'api-angular';
	ngOnInit() {
		// API Call
		
		this.http
			.get<any>('http://localhost:3000', {
				
			})
			.subscribe(data => {
				console.log(data);
				this.posts = data;
			});
	}
}