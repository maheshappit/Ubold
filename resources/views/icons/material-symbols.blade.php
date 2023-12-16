@extends('layouts.vertical', ['page_title' => 'Material Symbols'])

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Icons</a></li>
                            <li class="breadcrumb-item active">Material Symbols Icons (Google Icon)</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Material Symbols Icons (Google Icon)</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <!-- end page title -->
        
        <div class="row icons-list-demo">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title mb-4">All Icons<a class="badge badge-soft-primary ms-2" href="https://fonts.google.com/icons" target="_blank">Google Icon</a></h4>
                        <div class="row icon-list-demo" id="icons"> </div>
                    </div> <!-- end card-body -->
                </div> <!-- end card -->
            </div>
        </div>

    </div> <!-- container -->
@endsection

@section('script')
    @vite(['resources/js/pages/material-symbols.init.js'])
@endsection
