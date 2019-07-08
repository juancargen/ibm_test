/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapServiceTypeUpdateComponent } from 'app/entities/map-service-type/map-service-type-update.component';
import { MapServiceTypeService } from 'app/entities/map-service-type/map-service-type.service';
import { MapServiceType } from 'app/shared/model/map-service-type.model';

describe('Component Tests', () => {
    describe('MapServiceType Management Update Component', () => {
        let comp: MapServiceTypeUpdateComponent;
        let fixture: ComponentFixture<MapServiceTypeUpdateComponent>;
        let service: MapServiceTypeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapServiceTypeUpdateComponent]
            })
                .overrideTemplate(MapServiceTypeUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapServiceTypeUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapServiceTypeService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new MapServiceType(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapServiceType = entity;
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
                    const entity = new MapServiceType();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapServiceType = entity;
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
