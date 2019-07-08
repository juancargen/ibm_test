/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapServiceComponent } from 'app/entities/map-service/map-service.component';
import { MapServiceService } from 'app/entities/map-service/map-service.service';
import { MapService } from 'app/shared/model/map-service.model';

describe('Component Tests', () => {
    describe('MapService Management Component', () => {
        let comp: MapServiceComponent;
        let fixture: ComponentFixture<MapServiceComponent>;
        let service: MapServiceService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapServiceComponent],
                providers: []
            })
                .overrideTemplate(MapServiceComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapServiceComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapServiceService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new MapService(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.mapServices[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
