/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapCategoryDetailComponent } from 'app/entities/map-category/map-category-detail.component';
import { MapCategory } from 'app/shared/model/map-category.model';

describe('Component Tests', () => {
    describe('MapCategory Management Detail Component', () => {
        let comp: MapCategoryDetailComponent;
        let fixture: ComponentFixture<MapCategoryDetailComponent>;
        const route = ({ data: of({ mapCategory: new MapCategory(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapCategoryDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(MapCategoryDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapCategoryDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.mapCategory).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
