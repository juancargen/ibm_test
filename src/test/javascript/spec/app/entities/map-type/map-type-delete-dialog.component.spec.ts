/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapTypeDeleteDialogComponent } from 'app/entities/map-type/map-type-delete-dialog.component';
import { MapTypeService } from 'app/entities/map-type/map-type.service';

describe('Component Tests', () => {
    describe('MapType Management Delete Component', () => {
        let comp: MapTypeDeleteDialogComponent;
        let fixture: ComponentFixture<MapTypeDeleteDialogComponent>;
        let service: MapTypeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapTypeDeleteDialogComponent]
            })
                .overrideTemplate(MapTypeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapTypeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapTypeService);
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
