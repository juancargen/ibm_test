/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { SharedPresentationDeleteDialogComponent } from 'app/entities/shared-presentation/shared-presentation-delete-dialog.component';
import { SharedPresentationService } from 'app/entities/shared-presentation/shared-presentation.service';

describe('Component Tests', () => {
    describe('SharedPresentation Management Delete Component', () => {
        let comp: SharedPresentationDeleteDialogComponent;
        let fixture: ComponentFixture<SharedPresentationDeleteDialogComponent>;
        let service: SharedPresentationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [SharedPresentationDeleteDialogComponent]
            })
                .overrideTemplate(SharedPresentationDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SharedPresentationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SharedPresentationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
