/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapSeriesDetailComponent } from 'app/entities/map-series/map-series-detail.component';
import { MapSeries } from 'app/shared/model/map-series.model';

describe('Component Tests', () => {
    describe('MapSeries Management Detail Component', () => {
        let comp: MapSeriesDetailComponent;
        let fixture: ComponentFixture<MapSeriesDetailComponent>;
        const route = ({ data: of({ mapSeries: new MapSeries(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapSeriesDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(MapSeriesDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapSeriesDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.mapSeries).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
