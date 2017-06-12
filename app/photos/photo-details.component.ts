import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template: `<h1>Photo Details, ID = {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
    id;
    subscription;

    constructor(private _route: ActivatedRoute){
    }

    ngOnInit(){
    // note that the plus sign converts string to int
        this.subscription = this._route.params.subscribe(params => {
            this.id = +params["id"];
        });

        // Alternate method which won't reload the component
        // on subsequent clicks
        //this.id = this._route.snapshot.params["id"];
    }

    // this is used to clean up variables, which are 
    // available outside the component after the page terminates
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
