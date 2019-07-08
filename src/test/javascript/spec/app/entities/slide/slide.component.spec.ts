/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { SlideComponent } from 'app/entities/slide/slide.component';
import { SlideService } from 'app/entities/slide/slide.service';
import { Slide } from 'app/shared/model/slide.model';

describe('Component Tests', () => {
    describe('Slide Management Component', () => {
        let comp: SlideComponent;
        let fixture: ComponentFixture<SlideComponent>;
        let service: SlideService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [SlideComponent],
                providers: []
            })
                .overrideTemplate(SlideComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SlideComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SlideService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Slide(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.slides[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
