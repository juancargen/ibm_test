/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { SharedPresentationDetailComponent } from 'app/entities/shared-presentation/shared-presentation-detail.component';
import { SharedPresentation } from 'app/shared/model/shared-presentation.model';

describe('Component Tests', () => {
    describe('SharedPresentation Management Detail Component', () => {
        let comp: SharedPresentationDetailComponent;
        let fixture: ComponentFixture<SharedPresentationDetailComponent>;
        const route = ({ data: of({ sharedPresentation: new SharedPresentation(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [SharedPresentationDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SharedPresentationDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SharedPresentationDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.sharedPresentation).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
