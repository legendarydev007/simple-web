import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxKjuaModule } from 'ngx-kjua';
import { NgxBarcodeModule } from 'ngx-barcode';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const UI_MODULES = [
    // Angular
    BrowserAnimationsModule,
    FormsModule,

    // Material
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,

    // Local
    NgxKjuaModule,
    NgxBarcodeModule,
    ZXingScannerModule,
    PdfViewerModule,
];

@NgModule({ exports: UI_MODULES })
export class AppUiModule { }
