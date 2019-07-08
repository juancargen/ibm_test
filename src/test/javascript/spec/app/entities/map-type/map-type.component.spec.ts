/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapTypeComponent } from 'app/entities/map-type/map-type.component';
import { MapTypeService } from 'app/entities/map-type/map-type.service';
import { MapType } from 'app/shared/model/map-type.model';

describe('Component Tests', () => {
    describe('MapType Management Component', () => {
        let comp: MapTypeComponent;
        let fixture: ComponentFixture<MapTypeComponent>;
        let service: MapTypeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapTypeComponent],
                providers: []
            })
                .overrideTemplate(MapTypeComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapTypeComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapTypeService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new MapType(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.mapTypes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
