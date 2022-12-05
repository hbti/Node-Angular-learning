import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; // importing the http module
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule // adding it in the imports
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
