/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapCategoryUpdateComponent } from 'app/entities/map-category/map-category-update.component';
import { MapCategoryService } from 'app/entities/map-category/map-category.service';
import { MapCategory } from 'app/shared/model/map-category.model';

describe('Component Tests', () => {
    describe('MapCategory Management Update Component', () => {
        let comp: MapCategoryUpdateComponent;
        let fixture: ComponentFixture<MapCategoryUpdateComponent>;
        let service: MapCategoryService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapCategoryUpdateComponent]
            })
                .overrideTemplate(MapCategoryUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapCategoryUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapCategoryService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new MapCategory(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapCategory = entity;
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
                    const entity = new MapCategory();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.mapCategory = entity;
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
