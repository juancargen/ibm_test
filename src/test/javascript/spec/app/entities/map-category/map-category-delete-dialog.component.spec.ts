/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapCategoryDeleteDialogComponent } from 'app/entities/map-category/map-category-delete-dialog.component';
import { MapCategoryService } from 'app/entities/map-category/map-category.service';

describe('Component Tests', () => {
    describe('MapCategory Management Delete Component', () => {
        let comp: MapCategoryDeleteDialogComponent;
        let fixture: ComponentFixture<MapCategoryDeleteDialogComponent>;
        let service: MapCategoryService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapCategoryDeleteDialogComponent]
            })
                .overrideTemplate(MapCategoryDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapCategoryDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapCategoryService);
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
