/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapServiceTypeDetailComponent } from 'app/entities/map-service-type/map-service-type-detail.component';
import { MapServiceType } from 'app/shared/model/map-service-type.model';

describe('Component Tests', () => {
    describe('MapServiceType Management Detail Component', () => {
        let comp: MapServiceTypeDetailComponent;
        let fixture: ComponentFixture<MapServiceTypeDetailComponent>;
        const route = ({ data: of({ mapServiceType: new MapServiceType(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapServiceTypeDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(MapServiceTypeDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapServiceTypeDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.mapServiceType).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
