//This script is inspired by Ninique's Dollmaker Script (http://minidollz.ninique.net)

$(document).ready(function() {

  	$('#tabContentBodiceunder > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.bodiceUnderArea > img').attr('src', changeSrc); return false;});
	$('#tabContentBodiceover > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.bodiceOverArea > img').attr('src', changeSrc); return false;});
	$('#tabContentBust > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.bustArea > img').attr('src', changeSrc); return false;});
	$('#tabContentFaceshape > div > .item > a').click( function(){var changeSrc =$(this).attr('href');var changeMirror =$(this).attr('mirror');$('.faceShapeArea > img').attr('src', changeSrc); $('.skinArea > img').attr('src', changeMirror); return false;});
	$('#tabContentHairextrabraidstop > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); var changeMirror = $(this).attr('mirror'); $('.hairExtraBraidsTopArea > img').attr('src', changeSrc); $('.hairExtraBraidsMirrorArea > img').attr('src', changeMirror); return false;});
	$('#tabContentHeadwearfabrictop > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.headwearFabricTopArea > img').attr('src', changeSrc); return false;});
	$('#tabContentSkirtover > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.skirtOverArea > img').attr('src', changeSrc); return false;});
	$('#tabContentSkirtunder > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.skirtUnderArea > img').attr('src', changeSrc); return false;});
	$('#tabContentSleevesover > div > .item > a').click( function(){var changeSrc =$(this).attr('href'); var changeLeft =$(this).attr('leftsleeve');$('.sleevesOverArea > img').attr('src', changeSrc); $('.sleevesOverLeftArea > img').attr('src', changeLeft);return false;});
	$('#tabContentSleevesunder > div > .item > a').click( function(){var changeSrc =$(this).attr('href'); var changeLeft =$(this).attr('leftsleeve');$('.sleevesUnderArea > img').attr('src', changeSrc); $('.sleevesUnderLeftArea > img').attr('src', changeLeft);return false;});
	$('#tabContentWaist > div > .item > a').click( function(){var changeSrc =$(this).attr('href');$('.waistArea > img').attr('src', changeSrc); return false;});
    $('#tabContentBackground > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.backgroundArea > img').attr('src', changeSrc); return false; });
    $('#tabContentEyebrows > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.eyebrowsArea > img').attr('src', changeSrc); return false;});
    $('#tabContentEyes > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.eyesArea > img').attr('src', changeSrc); return false;});
    $('#tabContentFaceage0 > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceAge0Area > img').attr('src', changeSrc); return false;});
    $('#tabContentFaceage1 > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceAge1Area > img').attr('src', changeSrc); return false;});
    $('#tabContentFaceage2 > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceAge2Area > img').attr('src', changeSrc); return false;});
    $('#tabContentFaceage3 > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceAge3Area > img').attr('src', changeSrc); return false;});
    $('#tabContentFaceage4 > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceAge4Area > img').attr('src', changeSrc); return false;});
    $('#tabContentFacecheek > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceCheekArea > img').attr('src', changeSrc); return false;});
    $('#tabContentFacechin > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.faceChinArea > img').attr('src', changeSrc); return false;});
    $('#tabContentGarters > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.gartersArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHairextrabangs > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.hairExtraBangsArea > img').attr('src', changeSrc); return false;   });
    $('#tabContentHairextrabraidsunder > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); var changeMirror = $(this).attr('mirror'); $('.hairExtraBraidsUnderArea > img').attr('src', changeSrc); $('.hairExtraBraidsMirrorArea > img').attr('src', changeMirror); return false;});
    $('#tabContentHairextrabuns > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.hairExtraBunsArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHairextraedge > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.hairExtraEdgeArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHairextraloose > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.hairExtraLooseArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHairextraside > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.hairExtraSideArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHairtop > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.hairTopArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHairunder > div > .item > a').click(function() { var changeSrc = $(this).attr('href');  $('.hairUnderArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHand > div > .item > a').click(function() {var changeSrc = $(this).attr('href'); $('.handArea > img').attr('src', changeSrc); return false;});
    $('#tabContentHeadwearfabricneck > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); var changeMirror = $(this).attr('mirror'); $('.headwearFabricNeckArea > img').attr('src', changeSrc); $('.headwearFabricNeckMirrorArea > img').attr('src', changeMirror); return false;});
    $('#tabContentMouth > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.mouthArea > img').attr('src', changeSrc); return false;});
    $('#tabContentNosebridge > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.noseBridgeArea > img').attr('src', changeSrc); return false;});
    $('#tabContentNostrils > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.nostrilsArea > img').attr('src', changeSrc); return false;});
    $('#tabContentRouge > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.rougeArea > img').attr('src', changeSrc); return false;});
    $('#tabContentShoes > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.shoesArea > img').attr('src', changeSrc); return false;});
    $('#tabContentSocks > div > .item > a').click(function() { var changeSrc = $(this).attr('href'); $('.socksArea > img').attr('src', changeSrc); return false;});
	$('#tabContentSkin > div > .item > a').click(function() {var changeSrc = $(this).attr('href'); $('.skinArea > img').attr('src', changeSrc); return false; });

});