/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapServiceDetailComponent } from 'app/entities/map-service/map-service-detail.component';
import { MapService } from 'app/shared/model/map-service.model';

describe('Component Tests', () => {
    describe('MapService Management Detail Component', () => {
        let comp: MapServiceDetailComponent;
        let fixture: ComponentFixture<MapServiceDetailComponent>;
        const route = ({ data: of({ mapService: new MapService(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapServiceDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(MapServiceDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapServiceDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.mapService).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
