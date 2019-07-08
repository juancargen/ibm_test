/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapServiceTypeComponent } from 'app/entities/map-service-type/map-service-type.component';
import { MapServiceTypeService } from 'app/entities/map-service-type/map-service-type.service';
import { MapServiceType } from 'app/shared/model/map-service-type.model';

describe('Component Tests', () => {
    describe('MapServiceType Management Component', () => {
        let comp: MapServiceTypeComponent;
        let fixture: ComponentFixture<MapServiceTypeComponent>;
        let service: MapServiceTypeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapServiceTypeComponent],
                providers: []
            })
                .overrideTemplate(MapServiceTypeComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapServiceTypeComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapServiceTypeService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new MapServiceType(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.mapServiceTypes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
