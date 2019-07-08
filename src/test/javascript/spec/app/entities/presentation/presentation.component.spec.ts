/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { PresentationComponent } from 'app/entities/presentation/presentation.component';
import { PresentationService } from 'app/entities/presentation/presentation.service';
import { Presentation } from 'app/shared/model/presentation.model';

describe('Component Tests', () => {
    describe('Presentation Management Component', () => {
        let comp: PresentationComponent;
        let fixture: ComponentFixture<PresentationComponent>;
        let service: PresentationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [PresentationComponent],
                providers: []
            })
                .overrideTemplate(PresentationComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PresentationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PresentationService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Presentation(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.presentations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
