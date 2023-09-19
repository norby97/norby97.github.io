'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">site-centric documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' : 'data-bs-target="#xs-components-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' :
                                            'id="xs-components-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                            <li class="link">
                                                <a href="components/AccrualsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccrualsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdApprovalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdApprovalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdCalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdCalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdCategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdCategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdQueryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdQueryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdVendorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdVendorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddCategoryDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCategoryDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddDailyScheduleResourceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDailyScheduleResourceDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddDocumentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDocumentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddFindingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFindingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddFollowUpDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFollowUpDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddHolidayDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddHolidayDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddIndicationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddIndicationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddIrbDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddIrbDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddLabsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddLabsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMediaEventDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMediaEventDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMiscAppointmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMiscAppointmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMiscInvoiceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMiscInvoiceDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddNewLeadDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNewLeadDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddNewTrackDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNewTrackDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPatientDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPatientDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPatientTimerDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPatientTimerDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPatientToStudyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPatientToStudyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPatientToStudyFinalStepDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPatientToStudyFinalStepDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPatientToStudyFinalStepSelectedDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPatientToStudyFinalStepSelectedDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddRemitLocationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddRemitLocationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddRoleDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddRoleDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSelectedPatientDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSelectedPatientDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddStudyToCalendarDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddStudyToCalendarDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddStudyToStudyStartDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddStudyToStudyStartDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddTaskRoleDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTaskRoleDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddTraineeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTraineeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddTrialToRegManagerDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTrialToRegManagerDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddVendorDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddVendorDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddVersionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddVersionDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddWaitlistDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddWaitlistDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdvertisingReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdvertisingReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllowEsignDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllowEsignDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnonymousCallDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnonymousCallDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppointmentTrackingDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppointmentTrackingDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalEditDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalEditDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchiveBoxDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchiveBoxDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchivesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchivesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditViewTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditViewTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillSponsorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillSponsorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillableProceduresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillableProceduresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillingSetupDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingSetupDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoxContentsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoxContentsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuildStudyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuildStudyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BulkApproveDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulkApproveDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BulkReassignFollowUpDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulkReassignFollowUpDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BulkSmsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulkSmsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessHoursHolidaysDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessHoursHolidaysDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarCategoryDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarCategoryDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallSchedulingDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallSchedulingDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancelAppointmentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancelAppointmentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryStudyBudgetDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryStudyBudgetDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeCommitmentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeCommitmentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeStudyStatusDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeStudyStatusDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClosedStudiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClosedStudiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompaniesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanySitesDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanySitesDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompletePrescreenFormDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompletePrescreenFormDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompleteScreeningFormDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompleteScreeningFormDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactAddForLeadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactAddForLeadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactAddForStudyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactAddForStudyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactNotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactNotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactSearchResultsForLeadsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactSearchResultsForLeadsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactSearchResultsForStudiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactSearchResultsForStudiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CopyStudyBuildDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CopyStudyBuildDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CopyToAnotherSiteDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CopyToAnotherSiteDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CountdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateAdDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAdDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBillRequestDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBillRequestDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBinderDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBinderDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBoxLabelDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBoxLabelDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBudgetDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBudgetDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateFindingCategoryDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateFindingCategoryDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePermissionTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePermissionTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateTaskDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateTaskDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateWorkingListDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateWorkingListDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateWorkingListFromCheckboxesDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateWorkingListFromCheckboxesDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CsvpreviewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CsvpreviewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailyFollowUpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailyFollowUpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailyScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailyScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailySchedulePatientEventDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailySchedulePatientEventDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailySchedulePatientMisceallaneousDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailySchedulePatientMisceallaneousDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailySchedulePatientScreenDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailySchedulePatientScreenDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailySchedulePatientVisitDetatilsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailySchedulePatientVisitDetatilsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailyScheduleResourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DailyScheduleResourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataMergersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataMergersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateSelectSimpleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateSelectSimpleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerMonthHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerMonthHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DebugDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeletePatientPhoneNumberDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeletePatientPhoneNumberDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscrepanciesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscrepanciesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ESignDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ESignDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditAdditionalProceduresDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditAdditionalProceduresDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBinderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBinderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBusinessHoursDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBusinessHoursDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditEventDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditEventDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditFindingDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditFindingDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditHolidayDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditHolidayDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditMiscPaymentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditMiscPaymentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPermissionTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditPermissionTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProcedureDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProcedureDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProcedureNameDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProcedureNameDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditReportPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditReportPaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditScoreboardDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditScoreboardDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudyBuildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditStudyBuildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudyFileDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditStudyFileDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudyPathDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditStudyPathDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudyProcedureGroupsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditStudyProcedureGroupsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudyVisitsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditStudyVisitsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudyVisitsRuleDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditStudyVisitsRuleDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditTrainingDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditTrainingDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditVisitDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditVisitDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditWorkingListDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditWorkingListDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EsignatureDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EsignatureDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpiringDocsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpiringDocsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExternalDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedBackDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedBackDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileCorrespondenceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileCorrespondenceDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FinalAdsApprovalDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinalAdsApprovalDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FinanceAdCalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinanceAdCalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FindInvoicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindInvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FindingCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindingCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FollowUpPatientDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FollowUpPatientDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FollowUpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FollowUpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenericWarningDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenericWarningDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImagePreviewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagePreviewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImportCsvRecruitingDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImportCsvRecruitingDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndicationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndicationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InquiryCallDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InquiryCallDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InternalDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InternalDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InviteUserDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InviteUserDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IrbComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IrbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LabelGeneratorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabelGeneratorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeadDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeadDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeadsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeadsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LedgerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LedgerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkStudyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkStudyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkStudyStartDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkStudyStartDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LockScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LockScreenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LongLoadingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LongLoadingIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageCalendarCategoriesDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageCalendarCategoriesDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageCompanyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageCompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageFindingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageFindingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagePatientInterestDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagePatientInterestDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageSelectedFindingsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageSelectedFindingsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManifestShipmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManifestShipmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MargePatientDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MargePatientDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MasterFilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MasterFilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MergeLeadDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergeLeadDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageDetailDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageDetailDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiscChargesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiscChargesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoveFileDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoveFileDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyQaFindingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyQaFindingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyTasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyTasksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NameInputDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameInputDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NameUpdateDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameUpdateDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewFolderDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewFolderDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtherReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtherReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverlapDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlapDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientAppointmentMiniViewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientAppointmentMiniViewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientMiniViewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientMiniViewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientProfileSmsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientProfileSmsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientTrackingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientTrackingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientTrackingLoadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientTrackingLoadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentTrackerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentTrackerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfPreviewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfPreviewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PendingEsignaturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PendingEsignaturesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PermanentErrorDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermanentErrorDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PermissionsTemplatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsTemplatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PipelineViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PipelineViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PmScoreCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PmScoreCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrescreenSchedulingDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrescreenSchedulingDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreviousPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviousPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrintHelperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrintHelperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcedureGroupsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcedureGroupsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProceduresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProceduresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileChangeDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileChangeDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileUpdatePasswordDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileUpdatePasswordDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectManagementNotesDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectManagementNotesDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublishStudyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublishStudyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QualityPlanComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QualityPlanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QueryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QueryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QueryStudiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QueryStudiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReasonCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReasonCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReasonInputDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReasonInputDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReceptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReceptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecordPaymentAddInvoiceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecordPaymentAddInvoiceDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecordPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecordPaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralPartnerAddDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralPartnerAddDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralPartnerDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralPartnerDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralPartnerNotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralPartnerNotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralPartnersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralPartnersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralPartnersSearchFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralPartnersSearchFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegManagerDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegManagerDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReimbursableAdvertisingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReimbursableAdvertisingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RejectDocumentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RejectDocumentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemitLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemitLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportTableDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportTableDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestEsignDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestEsignDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RerunQueryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RerunQueryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RescheduleAppointmentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RescheduleAppointmentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScanBoxDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScanBoxDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleMiscellaneousDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleMiscellaneousDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleNextVisitDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleNextVisitDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleVisitPatientTrackingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleVisitPatientTrackingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScoreCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScoreCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScoreCardSetupDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScoreCardSetupDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenSchedulingDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScreenSchedulingDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchLeadDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchLeadDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectDateDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectDateDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectLanguageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectLanguageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectMessageLogStudyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectMessageLogStudyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SendToStudyStartDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SendToStudyStartDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowCalendarDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowCalendarDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowDocumentAuditDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowDocumentAuditDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleNameImputDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleNameImputDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiteDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SiteDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitesManageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitesManageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkinConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkinConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmsMessageDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsMessageDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmsTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoftLockDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SoftLockDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpecialAccessReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecialAccessReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyAssignmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyAssignmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyBudgetMaintenanceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyBudgetMaintenanceDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyBudgetViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyBudgetViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyBudgetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyBudgetsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyKnowledgebaseDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyKnowledgebaseDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyReportFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyReportFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyStartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyStartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuccessMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuccessMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskMessagesDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskMessagesDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToBeFiledComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToBeFiledComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TooltipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrainingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrainingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TriageVisitsReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TriageVisitsReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnassignedPaymentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnassignedPaymentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateFileDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateFileDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateFinCalendarWeekDatesDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateFinCalendarWeekDatesDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadFileDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFileDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UrlPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UrlPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserAccessMedicalRecordsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAccessMedicalRecordsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInviteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInviteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserMedicalRecordsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMedicalRecordsViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPermissionViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPermissionViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPermissionViewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPermissionViewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRegenerateAccessMedicalRecordsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegenerateAccessMedicalRecordsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VersionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VersionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDailyOpsReportDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDailyOpsReportDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDocumentWithPinDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDocumentWithPinDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewEditStudyDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewEditStudyDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewEventDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewEventDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewStudyStartsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewStudyStartsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTrackedProceduresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewTrackedProceduresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTrackedVisitsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewTrackedVisitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTrackedVisitsLoadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewTrackedVisitsLoadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisitConditionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisitConditionDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningStudyDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WarningStudyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkingListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkingListSchedulePreescreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkingListSchedulePreescreenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkingListScheduleScreenDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkingListScheduleScreenDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkingListSmsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkingListSmsDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' : 'data-bs-target="#xs-directives-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' :
                                        'id="xs-directives-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                        <li class="link">
                                            <a href="directives/MorrisChartDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MorrisChartDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgxMatSelectDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxMatSelectDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' :
                                        'id="xs-injectables-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CheckboxListService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckboxListService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NgxMatSelectInitializer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxMatSelectInitializer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WindowService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WindowService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' : 'data-bs-target="#xs-pipes-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' :
                                            'id="xs-pipes-links-module-AppModule-0e79601a317a8e3ce9ffb04cbff73a3cdf909d2bbcdb7e4501b2d6382695f73db3a17c7ae372e43605a77696c20b5843b4516e466167b7e5bf743bbcdac5ba4d"' }>
                                            <li class="link">
                                                <a href="pipes/ActionStatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionStatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DataNamePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataNamePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EinPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EinPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/HumanizePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HumanizePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LeadStatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeadStatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NotSetPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotSetPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NotificationPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PasspipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasspipePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PhonePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhonePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PlivoErrorCodePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlivoErrorCodePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RepetOptionPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepetOptionPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StudyStatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyStatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TrialPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrialPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WithoutUnderscorePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithoutUnderscorePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/I18nModule.html" data-type="entity-link" >I18nModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NgxMatSelectModule.html" data-type="entity-link" >NgxMatSelectModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CopiedMessageComponent.html" data-type="entity-link" >CopiedMessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FileResponseMessageComponent.html" data-type="entity-link" >FileResponseMessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FolderDragMessageComponent.html" data-type="entity-link" >FolderDragMessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotAllowedMessageComponent.html" data-type="entity-link" >NotAllowedMessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlaceholderDragMessageComponent.html" data-type="entity-link" >PlaceholderDragMessageComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/NgxMatSelectMediaTracker.html" data-type="entity-link" >NgxMatSelectMediaTracker</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TimeRangeValidatorDirective.html" data-type="entity-link" >TimeRangeValidatorDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccrualsAndDiscrepancies.html" data-type="entity-link" >AccrualsAndDiscrepancies</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartModel.html" data-type="entity-link" >ChartModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContactStudyRole.html" data-type="entity-link" >ContactStudyRole</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomNgxDateTimeModule.html" data-type="entity-link" >CustomNgxDateTimeModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinancialCalendar.html" data-type="entity-link" >FinancialCalendar</a>
                            </li>
                            <li class="link">
                                <a href="classes/InternalValidation.html" data-type="entity-link" >InternalValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/InTheNews.html" data-type="entity-link" >InTheNews</a>
                            </li>
                            <li class="link">
                                <a href="classes/Invoice.html" data-type="entity-link" >Invoice</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgxMatSelectConfigs.html" data-type="entity-link" >NgxMatSelectConfigs</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegManagerResponse.html" data-type="entity-link" >RegManagerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SiteUserView.html" data-type="entity-link" >SiteUserView</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudyStart.html" data-type="entity-link" >StudyStart</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudyStartSiteView.html" data-type="entity-link" >StudyStartSiteView</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudyUserRoles.html" data-type="entity-link" >StudyUserRoles</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoItemFlatNode.html" data-type="entity-link" >TodoItemFlatNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoItemNode.html" data-type="entity-link" >TodoItemNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountTypeService.html" data-type="entity-link" >AccountTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdsService.html" data-type="entity-link" >AdsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdvertisingReportService.html" data-type="entity-link" >AdvertisingReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppLoadService.html" data-type="entity-link" >AppLoadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppointmentService.html" data-type="entity-link" >AppointmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditService.html" data-type="entity-link" >AuditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BillService.html" data-type="entity-link" >BillService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BindersTemplateService.html" data-type="entity-link" >BindersTemplateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BudgetService.html" data-type="entity-link" >BudgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CalendarService.html" data-type="entity-link" >CalendarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckboxListService.html" data-type="entity-link" >CheckboxListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link" >CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactCompanyService.html" data-type="entity-link" >ContactCompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomNgxDatetimeAdapter.html" data-type="entity-link" >CustomNgxDatetimeAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DailyScheduleResourcesService.html" data-type="entity-link" >DailyScheduleResourcesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link" >DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadService.html" data-type="entity-link" >DownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorDialogService.html" data-type="entity-link" >ErrorDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EsignReasonsService.html" data-type="entity-link" >EsignReasonsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindingsService.html" data-type="entity-link" >FindingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FollowUpService.html" data-type="entity-link" >FollowUpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FollowUpsPatientProfileService.html" data-type="entity-link" >FollowUpsPatientProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IndicationsService.html" data-type="entity-link" >IndicationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitAuditTableService.html" data-type="entity-link" >InitAuditTableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvoicesService.html" data-type="entity-link" >InvoicesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeadsService.html" data-type="entity-link" >LeadsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LedgerService.html" data-type="entity-link" >LedgerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MasterFilesService.html" data-type="entity-link" >MasterFilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaEventService.html" data-type="entity-link" >MediaEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicalRecordsService.html" data-type="entity-link" >MedicalRecordsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MiscellaneousPatientProfileService.html" data-type="entity-link" >MiscellaneousPatientProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MiscellaneousService.html" data-type="entity-link" >MiscellaneousService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NgxMatSelectInitializer.html" data-type="entity-link" >NgxMatSelectInitializer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NgxMatSelectService.html" data-type="entity-link" >NgxMatSelectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientsService.html" data-type="entity-link" >PatientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PipelineViewService.html" data-type="entity-link" >PipelineViewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrescreenPatientProfileService.html" data-type="entity-link" >PrescreenPatientProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProceduresService.html" data-type="entity-link" >ProceduresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecordPaymentService.html" data-type="entity-link" >RecordPaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecruitingService.html" data-type="entity-link" >RecruitingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReferralPartnersService.html" data-type="entity-link" >ReferralPartnersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegManagerService.html" data-type="entity-link" >RegManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RootHttpService.html" data-type="entity-link" >RootHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SccipService.html" data-type="entity-link" >SccipService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScoreCardService.html" data-type="entity-link" >ScoreCardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenAppointmentService.html" data-type="entity-link" >ScreenAppointmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenPatientProfileService.html" data-type="entity-link" >ScreenPatientProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteService.html" data-type="entity-link" >SiteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SmsService.html" data-type="entity-link" >SmsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpecialAccessReportsService.html" data-type="entity-link" >SpecialAccessReportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudyBuildService.html" data-type="entity-link" >StudyBuildService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudyService.html" data-type="entity-link" >StudyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudyStartsService.html" data-type="entity-link" >StudyStartsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToBeFiledService.html" data-type="entity-link" >ToBeFiledService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrackedVisitsService.html" data-type="entity-link" >TrackedVisitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrackingService.html" data-type="entity-link" >TrackingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrainingService.html" data-type="entity-link" >TrainingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TriageVisitReportsService.html" data-type="entity-link" >TriageVisitReportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserPreferencesService.html" data-type="entity-link" >UserPreferencesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRoleService.html" data-type="entity-link" >UserRoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link" >UtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VendorService.html" data-type="entity-link" >VendorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowrefService.html" data-type="entity-link" >WindowrefService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowscoreService.html" data-type="entity-link" >WindowscoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowService.html" data-type="entity-link" >WindowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkingListService.html" data-type="entity-link" >WorkingListService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpRequestInterceptor.html" data-type="entity-link" >HttpRequestInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdministrationGuard.html" data-type="entity-link" >AdministrationGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AdvertisingGuard.html" data-type="entity-link" >AdvertisingGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CompadminSysadminSuperuserGuard.html" data-type="entity-link" >CompadminSysadminSuperuserGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CrmbdGuard.html" data-type="entity-link" >CrmbdGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CtmsGuard.html" data-type="entity-link" >CtmsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/FinanceGuard.html" data-type="entity-link" >FinanceGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MaintenanceGuard.html" data-type="entity-link" >MaintenanceGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NotAuthGuard.html" data-type="entity-link" >NotAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RegularGuard.html" data-type="entity-link" >RegularGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RegulatoryCompAdminGuard.html" data-type="entity-link" >RegulatoryCompAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RegulatoryGuard.html" data-type="entity-link" >RegulatoryGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SysadminSuperuserGuard.html" data-type="entity-link" >SysadminSuperuserGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AllAuditTrailsDto.html" data-type="entity-link" >AllAuditTrailsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllCompanyDetailsDto.html" data-type="entity-link" >AllCompanyDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuditFilterBy.html" data-type="entity-link" >AuditFilterBy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuditTrail.html" data-type="entity-link" >AuditTrail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationResponse.html" data-type="entity-link" >AuthenticationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BinderTemplate.html" data-type="entity-link" >BinderTemplate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Budgets.html" data-type="entity-link" >Budgets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BusinessSettings.html" data-type="entity-link" >BusinessSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CalendarEvent.html" data-type="entity-link" >CalendarEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangePasswordRequests.html" data-type="entity-link" >ChangePasswordRequests</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartAreaBarLineOptions.html" data-type="entity-link" >ChartAreaBarLineOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartAreaOptions.html" data-type="entity-link" >ChartAreaOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartBarOptions.html" data-type="entity-link" >ChartBarOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartData.html" data-type="entity-link" >ChartData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartDatas.html" data-type="entity-link" >ChartDatas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartDonutOptions.html" data-type="entity-link" >ChartDonutOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartLineOptions.html" data-type="entity-link" >ChartLineOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartOptions.html" data-type="entity-link" >ChartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompanyDetailsDto.html" data-type="entity-link" >CompanyDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Compound.html" data-type="entity-link" >Compound</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContactModel.html" data-type="entity-link" >ContactModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Costs.html" data-type="entity-link" >Costs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cro.html" data-type="entity-link" >Cro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DailyScheduleResource.html" data-type="entity-link" >DailyScheduleResource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardChart.html" data-type="entity-link" >DashboardChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogTemplateData.html" data-type="entity-link" >DialogTemplateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtraInfo.html" data-type="entity-link" >ExtraInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FiledModel.html" data-type="entity-link" >FiledModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileEmails.html" data-type="entity-link" >FileEmails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilePath.html" data-type="entity-link" >FilePath</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FolderStructure.html" data-type="entity-link" >FolderStructure</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeneralCategory.html" data-type="entity-link" >GeneralCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeneralResponse.html" data-type="entity-link" >GeneralResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Indication.html" data-type="entity-link" >Indication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IndicationSiteView.html" data-type="entity-link" >IndicationSiteView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IndicationView.html" data-type="entity-link" >IndicationView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InitAuditFilterDto.html" data-type="entity-link" >InitAuditFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InitDashboardDto.html" data-type="entity-link" >InitDashboardDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Laboratory.html" data-type="entity-link" >Laboratory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lead.html" data-type="entity-link" >Lead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogInUserDto.html" data-type="entity-link" >LogInUserDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgxMatMomentDateAdapterOptions.html" data-type="entity-link" >NgxMatMomentDateAdapterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OverViewDetailsModel.html" data-type="entity-link" >OverViewDetailsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Patient.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PatientRow.html" data-type="entity-link" >PatientRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Phase.html" data-type="entity-link" >Phase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PipelineModel.html" data-type="entity-link" >PipelineModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PipelinesDto.html" data-type="entity-link" >PipelinesDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Population.html" data-type="entity-link" >Population</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcedureColumn.html" data-type="entity-link" >ProcedureColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Protocol.html" data-type="entity-link" >Protocol</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReasonCategory.html" data-type="entity-link" >ReasonCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RegManagerStudy.html" data-type="entity-link" >RegManagerStudy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Site.html" data-type="entity-link" >Site</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sponsor.html" data-type="entity-link" >Sponsor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Study.html" data-type="entity-link" >Study</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudyDialogData.html" data-type="entity-link" >StudyDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TaskModel.html" data-type="entity-link" >TaskModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TrackedProcedure.html" data-type="entity-link" >TrackedProcedure</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TrackedVisit.html" data-type="entity-link" >TrackedVisit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAccessMedicalRecords.html" data-type="entity-link" >UserAccessMedicalRecords</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInviteToken.html" data-type="entity-link" >UserInviteToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserProfileDetails.html" data-type="entity-link" >UserProfileDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRegisterDto.html" data-type="entity-link" >UserRegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisitRow.html" data-type="entity-link" >VisitRow</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});