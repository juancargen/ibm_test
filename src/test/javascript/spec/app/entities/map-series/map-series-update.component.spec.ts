/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapSeriesUpdateComponent } from 'app/entities/map-series/map-series-update.component';
import { MapSeriesService } from 'app/entities/map-series/map-series.service';
import { MapSeries } from 'app/shared/model/map-series.model';

describe('Component Tests', () => {
    describe('MapSeries Management Update Component', () => {
        let comp: MapSeriesUpdateComponent;
        let fixture: ComponentFixture<MapSeriesUpdateComponent>;
        let service: MapSeriesService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapSeriesUpdateComponent]
            })
                .overrideTemplate(MapSeriesUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapSeriesUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapSeriesService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new MapSeries(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapSeries = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new MapSeries();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapSeries = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
