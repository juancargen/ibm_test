/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { SharedPresentationComponent } from 'app/entities/shared-presentation/shared-presentation.component';
import { SharedPresentationService } from 'app/entities/shared-presentation/shared-presentation.service';
import { SharedPresentation } from 'app/shared/model/shared-presentation.model';

describe('Component Tests', () => {
    describe('SharedPresentation Management Component', () => {
        let comp: SharedPresentationComponent;
        let fixture: ComponentFixture<SharedPresentationComponent>;
        let service: SharedPresentationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [SharedPresentationComponent],
                providers: []
            })
                .overrideTemplate(SharedPresentationComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SharedPresentationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SharedPresentationService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new SharedPresentation(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.sharedPresentations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
