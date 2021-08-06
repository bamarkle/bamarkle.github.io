import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = "/media/b/Disk of Holding/Coding/Projects/Selenium/chromedriver"
driver = webdriver.Chrome(PATH)

driver.get("https://outlook.office.com")

_x = driver.find_element_by_id('i0116')
_x.send_keys('bbm5362@psu.edu', Keys.RETURN)

_x = driver.find_element_by_id('i0118')
_x.send_keys('CoralineLouise07')

time.sleep(1)
driver.find_element_by_xpath("//input[@id='idSIButton9']").click()
driver.find_element_by_xpath("//select[@name='device']/option[text()='Mine (XXX-XXX-8842)']").click()

time.sleep(1)
driver.find_element_by_xpath("//button[normalize-space()='Send Me a Push']").click()

time.sleep(1)





