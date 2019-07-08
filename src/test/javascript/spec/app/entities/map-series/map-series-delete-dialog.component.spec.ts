/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { StratangbackendgatewayTestModule } from '../../../test.module';
import { MapSeriesDeleteDialogComponent } from 'app/entities/map-series/map-series-delete-dialog.component';
import { MapSeriesService } from 'app/entities/map-series/map-series.service';

describe('Component Tests', () => {
    describe('MapSeries Management Delete Component', () => {
        let comp: MapSeriesDeleteDialogComponent;
        let fixture: ComponentFixture<MapSeriesDeleteDialogComponent>;
        let service: MapSeriesService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StratangbackendgatewayTestModule],
                declarations: [MapSeriesDeleteDialogComponent]
            })
                .overrideTemplate(MapSeriesDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MapSeriesDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MapSeriesService);
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
