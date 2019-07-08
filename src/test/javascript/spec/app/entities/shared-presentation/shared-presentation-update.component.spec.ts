/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { SharedPresentationUpdateComponent } from 'app/entities/shared-presentation/shared-presentation-update.component';
import { SharedPresentationService } from 'app/entities/shared-presentation/shared-presentation.service';
import { SharedPresentation } from 'app/shared/model/shared-presentation.model';

describe('Component Tests', () => {
    describe('SharedPresentation Management Update Component', () => {
        let comp: SharedPresentationUpdateComponent;
        let fixture: ComponentFixture<SharedPresentationUpdateComponent>;
        let service: SharedPresentationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [SharedPresentationUpdateComponent]
            })
                .overrideTemplate(SharedPresentationUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SharedPresentationUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SharedPresentationService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new SharedPresentation(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.sharedPresentation = entity;
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
                    const entity = new SharedPresentation();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.sharedPresentation = entity;
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
