import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Go to the local static page
    page.goto("file:///app/Project5/index.html")
    page.wait_for_timeout(1000)

    # Take initial screenshot of the hero section
    page.screenshot(path="/home/jules/verification/screenshots/hero_section.png")
    page.wait_for_timeout(500)

    # Scroll down to the specs carousel section
    page.evaluate("document.getElementById('specs').scrollIntoView();")
    page.wait_for_timeout(1000)

    # Take screenshot of the first slide
    page.screenshot(path="/home/jules/verification/screenshots/carousel_slide1.png")
    page.wait_for_timeout(500)

    # Click the Next button to transition to Slide 2
    page.click("#next")
    page.wait_for_timeout(1500)

    # Take screenshot of the second slide
    page.screenshot(path="/home/jules/verification/screenshots/carousel_slide2.png")
    page.wait_for_timeout(500)

    # Click the Next button to transition to Slide 3
    page.click("#next")
    page.wait_for_timeout(1500)

    # Take screenshot of the third slide
    page.screenshot(path="/home/jules/verification/screenshots/carousel_slide3.png")
    page.wait_for_timeout(500)

    # Click the Prev button to return to Slide 2
    page.click("#prev")
    page.wait_for_timeout(1500)

    # Take screenshot of the final state
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Record video of viewport size 1280x720
        context = browser.new_context(
            viewport={"width": 1280, "height": 720},
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
            print("Verification CUJ completed successfully.")
