/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapCategoryComponent } from 'app/entities/map-category/map-category.component';
import { MapCategoryService } from 'app/entities/map-category/map-category.service';
import { MapCategory } from 'app/shared/model/map-category.model';

describe('Component Tests', () => {
    describe('MapCategory Management Component', () => {
        let comp: MapCategoryComponent;
        let fixture: ComponentFixture<MapCategoryComponent>;
        let service: MapCategoryService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapCategoryComponent],
                providers: []
            })
                .overrideTemplate(MapCategoryComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MapCategoryComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapCategoryService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new MapCategory(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.mapCategories[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
