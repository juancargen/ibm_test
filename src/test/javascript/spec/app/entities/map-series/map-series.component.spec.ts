/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapSeriesComponent } from 'app/entities/map-series/map-series.component';
import { MapSeriesService } from 'app/entities/map-series/map-series.service';
import { MapSeries } from 'app/shared/model/map-series.model';

describe('Component Tests', () => {
    describe('MapSeries Management Component', () => {
        let comp: MapSeriesComponent;
        let fixture: ComponentFixture<MapSeriesComponent>;
        let service: MapSeriesService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapSeriesComponent],
                providers: []
            })
                .overrideTemplate(MapSeriesComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapSeriesComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapSeriesService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new MapSeries(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.mapSeries[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
