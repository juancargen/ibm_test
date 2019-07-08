/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapTypeDetailComponent } from 'app/entities/map-type/map-type-detail.component';
import { MapType } from 'app/shared/model/map-type.model';

describe('Component Tests', () => {
    describe('MapType Management Detail Component', () => {
        let comp: MapTypeDetailComponent;
        let fixture: ComponentFixture<MapTypeDetailComponent>;
        const route = ({ data: of({ mapType: new MapType(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapTypeDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(MapTypeDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapTypeDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.mapType).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
