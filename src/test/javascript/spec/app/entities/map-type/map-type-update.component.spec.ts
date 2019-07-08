/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapTypeUpdateComponent } from 'app/entities/map-type/map-type-update.component';
import { MapTypeService } from 'app/entities/map-type/map-type.service';
import { MapType } from 'app/shared/model/map-type.model';

describe('Component Tests', () => {
    describe('MapType Management Update Component', () => {
        let comp: MapTypeUpdateComponent;
        let fixture: ComponentFixture<MapTypeUpdateComponent>;
        let service: MapTypeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapTypeUpdateComponent]
            })
                .overrideTemplate(MapTypeUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapTypeUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapTypeService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new MapType(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapType = entity;
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
                    const entity = new MapType();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapType = entity;
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
