/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapServiceUpdateComponent } from 'app/entities/map-service/map-service-update.component';
import { MapServiceService } from 'app/entities/map-service/map-service.service';
import { MapService } from 'app/shared/model/map-service.model';

describe('Component Tests', () => {
    describe('MapService Management Update Component', () => {
        let comp: MapServiceUpdateComponent;
        let fixture: ComponentFixture<MapServiceUpdateComponent>;
        let service: MapServiceService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapServiceUpdateComponent]
            })
                .overrideTemplate(MapServiceUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapServiceUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapServiceService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new MapService(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapService = entity;
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
                    const entity = new MapService();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapService = entity;
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
